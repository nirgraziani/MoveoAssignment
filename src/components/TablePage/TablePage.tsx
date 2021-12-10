import {
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { ChangeEvent } from "react";
import { useUsers } from "../../store/usersContext";
import Header from "../Header/Header";
import UserRow from "../UserRow/UserRow";
import styles from "./TablePage.module.css";

const TablePage = () => {
  const { users = [], fetchUsers } = useUsers();
  const onPaginationChange = (e: ChangeEvent<unknown>, pageNum: number) => {
    fetchUsers(pageNum);
  };
  return (
    <>
      <Header>All Users</Header>
      <div className={styles.TablePage}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>E-mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow hover key={user.login.uuid}>
                <UserRow userData={user} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={styles.paginationContainer}>
          <Stack spacing={2}>
            <Pagination
              onChange={onPaginationChange}
              count={10}
              color="primary"
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default TablePage;
