const User = require("../db/models/user_schema");
const UserPref = require("../db/models/user_prefrences_schema");
const { sendRelevantAssetEmail } = require("./sendEmail");
const jwt = require("jsonwebtoken");

const getUserProps = (props) => {
  // function that can sort what we want to return back and save sensative info from returning back
  return {
    _id: props.id,
    email: props.email,
    firstname: props.firstname,
    lastname: props.lastname,
    phoneNumber: props.phoneNumber,
    email: props.email,
    isJustChangedPassword: props.isJustChangedPassword,
    preferences: props.preferences,
    isAdmin: props.isAdmin,
    isVerified: props.isVerified,
  };
};

const checkUsersPrefrences = async (asset) => {
  console.log("here");
  const usersPref = await UserPref.find();
  usersPref.forEach(async (pref) => {
    const roomsArr = pref.roomsNumber.split("-");
    const minRoom = Number(roomsArr[0]);
    const maxRoom = Number(roomsArr[1]);

    if (
      pref.area.includes(asset.area) &&
      pref.price >= asset.pricePerMonth &&
      minRoom <= asset.roomsNumber <= maxRoom
    ) {
      const user = await User.findById(pref.userId);
      if (user) {
        sendRelevantAssetEmail(
          user.email,
          asset,
          user.firstname,
          user.preferredLang
        );
      }
    }
  });
};

const validateToken = (token) => {
  try {
    return jwt.verify(token, "slbjdlk23kdlkf34223r");
  } catch (error) {
    throw error;
  }
};

module.exports = { getUserProps, checkUsersPrefrences, validateToken };
