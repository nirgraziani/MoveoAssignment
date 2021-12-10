import { Card, CardContent, Typography, styled, Avatar } from "@mui/material";
import { useUsers } from "../../store/usersContext";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Header from "../Header/Header";
import styles from "./UserDetails.module.css";

const StyledCard = styled(Card)`
  display: flex;
  background-color: cadetblue;
  padding: 25px 25px 25px 25px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UserDetails = () => {
  const { selectedUser: userData } = useUsers();
  return (
    <>
      <Header>User Details</Header>
      <div className={styles.UserDetails}>
        <StyledCard sx={{ maxWidth: 600 }}>
          <Avatar src={userData?.picture.thumbnail} />
          <StyledCardContent>
            <Typography gutterBottom variant="h5" component="div">
              {userData?.name.first} {userData?.name.last}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Age: {userData?.dob.age}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {userData?.gender}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <a href={"mailto:" + userData?.email}>Send E-mail</a>
            </Typography>
          </StyledCardContent>
        </StyledCard>
      </div>

      <GoogleMaps />
    </>
  );
};

export default UserDetails;
