
import React, {FC} from 'react';
import SignUpScreen from 'screens/SignUpScreen';
import LoginEmailScreen from 'screens/LoginEmailScreen';
import UserInfoScreen from 'screens/UserInfoScreen';
import StackNav from 'navigation/StackNav';
import TaskViewScreen from 'screens/TaskViewScreen';
import LoginPasswordScreen from 'screens/LoginPasswordScreen';
import AddTaskScreen from 'screens/AddTaskScreen';

interface IProps {}

/**
* @author Bishwas Z. Khanal
* @function @Root

**/

const Root: FC<IProps> = props => {
 
  return (
    <StackNav/>
  );
};



export default Root;
