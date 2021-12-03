import { useDispatch, useSelector } from "react-redux";

import { toggleNameAction } from "../Store/Profile/actions";

import { profileSelector } from "../Store/Profile/selectors";

export const Profile = () => {
  const { name, showName } = useSelector(profileSelector);

  const dispatch = useDispatch();

  const setShowName = () => {
    dispatch(toggleNameAction());
  };

  return (
    <div>
      <div>Profile</div>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={setShowName}
      />
      <span>Show Name</span>
      {showName && <div>{name}</div>}
    </div>
  );
};
