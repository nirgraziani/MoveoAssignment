import { TableCell } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../models/user";
import { useUsers } from "../../store/usersContext";
import Avatar from "../Avatar";

interface userRowProps {
  userData: IUser;
}

function UserRow({ userData }: userRowProps) {
  const { selectUser } = useUsers();
  const navigate = useNavigate();

  const onClickSelectUser = () => {
    selectUser(userData);
    navigate(`../userdetails/${userData.name.first}${userData.name.last}`);
  };

  return (
    <>
      <TableCell onClick={onClickSelectUser}>
        <Avatar src={userData.picture.thumbnail} />
      </TableCell>
      <TableCell onClick={onClickSelectUser}>
        {userData.name.first.charAt(0)}
        {userData.name.last.charAt(0)}
      </TableCell>
      <TableCell onClick={onClickSelectUser}>{userData.dob.age}</TableCell>
      <TableCell onClick={onClickSelectUser}>{userData.gender}</TableCell>
      <TableCell>
        <a href={"mailto:" + userData.email}>Send E-mail</a>
      </TableCell>
    </>
  );
}
export default UserRow;
