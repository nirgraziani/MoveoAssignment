import axios from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { IResponse } from "../models/response";
import { IUser } from "../models/user";

const API_URL = "https://randomuser.me/api/?";

// Define Provider value
type UsersContextType = {
  users?: IUser[];
  pathName?: string;
  selectedUser?: IUser;
  fetchUsers: (pageNum: number) => void;
  selectUser: (userData: IUser) => void;
};

// Context creation
export const UsersContext = createContext<UsersContextType>({
  fetchUsers: (pageNum: number) => {},
  selectUser: (userData: IUser) => {},
});

// Provider creation
interface UsersProviderProps {
  children?: ReactNode;
}

const UsersProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState<IUser[]>();
  const [selectedUser, setSelectedUser] = useState<IUser>();

  const fetchUsers = async (pageNum: number) => {
    try {
      const response = await axios.get<IResponse>(
        `${API_URL}page=${pageNum}&results=10&seed=abc&inc=picture,name,email,gender,dob,location,login`,
        {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      );
      setUsers(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers(1);
  }, []);

  const selectUser = useCallback((userData: IUser) => {
    setSelectedUser(userData);
    console.log(userData);
  }, []);

  return (
    <UsersContext.Provider
      value={{
        fetchUsers,
        selectUser,
        users,
        selectedUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw Error("Should use `useUsers` under `UsersProvider`");
  }
  return context;
};

export default UsersProvider;
