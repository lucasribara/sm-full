import {
    PersonAddOutlined,
    PersonRemoveOutlined
  } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import { setFriends } from "state"; 
import { useNavigate } from "react-router-dom";

const Friend = ({ friendId, name, subtitle, usePicturePath}) => {
    const {palette} = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {_id} = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);

    
};

export default Friend;