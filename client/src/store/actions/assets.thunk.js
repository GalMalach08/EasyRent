import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthHeader, getTokenCookie } from "../../utils/tools";

// Add asset to the database
export const addAsset = createAsyncThunk(
  "assets/addAsset",
  async (assetObj) => {
    try {
      const response = await fetch(`/asset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assetObj),
      });
      const { asset, message } = await response.json();
      return { message, asset };
    } catch (error) {
      console.error(error);
    }
  }
);

// Update asset in the database
export const updateAsset = createAsyncThunk(
  "assets/updateAsset",
  async (assetObj) => {
    if (assetObj.notApproved) {
      const response = await fetch(`/asset/notapproved`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assetObj),
      });
      const { asset, message } = await response.json();
      return { message, asset };
    } else {
      delete assetObj["notApproved"];
      const response = await fetch(`/asset`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assetObj),
      });
      const { asset, message } = await response.json();
      return { message, asset };
    }
  }
);

// Get assets from the database by category
export const getAssetsByCategory = createAsyncThunk(
  "assets/getAssets",
  async ({ id, skip, limit }) => {
    const response = await fetch(
      `/asset/category/${id}?skip=${skip}&limit=${limit}`,
      getAuthHeader()
    );
    const { assets, assetsTotalLength } = await response.json();
    console.log(assets);
    return { assets, assetsTotalLength };
  }
);

// Get asset from the database by id
export const getAssetById = createAsyncThunk(
  "assets/getAssetById",
  async (id) => {
    try {
      const response = await fetch(`/asset/${id}`, getAuthHeader());
      const { asset } = await response.json();
      return { asset };
    } catch (error) {
      console.error(error);
    }
  }
);

// Filter the assets on the screen
export const filterAssets = createAsyncThunk(
  "assets/FilterAssets",
  async ({ filterObj, skip, limit }) => {
    const response = await fetch(`/asset/filter?skip=${skip}&limit=${limit}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filterObj),
    });
    const { assets, assetsTotalLength } = await response.json();
    return { assets, assetsTotalLength };
  }
);

// Get all assets by user
export const getAssetsOfUser = createAsyncThunk(
  "assets/getAssetsOfUser",
  async (id) => {
    const response = await fetch(`/asset/byuser/${id}`);
    const data = await response.json();
    const res = await fetch(`/asset/notapproved/byuser/${id}`);
    const info = await res.json();
    return { assets: [...info.notApprovedAssets, ...data.assets] };
  }
);

// Get all assets by user that not aprroved yet
export const getNotApprovedAssetsOfUser = createAsyncThunk(
  "assets/getNotApprovedAssetsOfUser",
  async (id) => {
    const response = await fetch(`/asset/notapproved/byuser/${id}`);
    const { notApprovedAssets } = await response.json();
    return { notApprovedAssets };
  }
);

// Approve asset
export const approveAssetById = createAsyncThunk(
  "assets/approveAssetById",
  async (id) => {
    const response = await fetch(`/asset/aproveasset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getTokenCookie()}`,
      },
      body: JSON.stringify({ id }),
    });
    const { success } = await response.json();
    return { success };
  }
);

// Delete not approved asset
export const deleteNotApprovedAsset = createAsyncThunk(
  "assets/deleteNotApprovedAsset",
  async (id) => {
    try {
      console.log("delte not");
      const response = await fetch(`/asset/notapproved`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getTokenCookie()}`,
        },
        body: JSON.stringify({ id }),
      });
      const { success } = await response.json();
      return { success };
    } catch (error) {
      console.error(error);
    }
  }
);

// Delete not approved asset
export const deleteApprovedAsset = createAsyncThunk(
  "assets/deleteApprovedAsset",
  async (id) => {
    try {
      console.log("delte yes");

      const response = await fetch(`/asset/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getTokenCookie()}`,
        },
        body: JSON.stringify({ id }),
      });
      const { success } = await response.json();
      return { success };
    } catch (error) {
      console.error(error);
    }
  }
);

// Get not aprroved assets
export const getNotApprovedAssets = createAsyncThunk(
  "assets/getNotApprovedAssets",
  async () => {
    try {
      const response = await fetch(`/asset/notapproved`);
      const { assets } = await response.json();

      return { assets };
    } catch (error) {
      console.error(error);
    }
  }
);

// Get not aprroved assets
export const getNumberOfAssets = createAsyncThunk(
  "assets/getNumberOfAssets",
  async () => {
    try {
      const response = await fetch(`/asset/assets/all`, getAuthHeader());
      const { rentCount, subletCount } = await response.json();

      return { rentCount, subletCount };
    } catch (error) {
      console.error(error);
    }
  }
);
