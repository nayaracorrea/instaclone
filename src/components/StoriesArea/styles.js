import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  height: 100px;
  background-color: black;

  flex: 1;

  justify-content: center;

  padding: 15px;
`;

export const AvatarBorder = styled(LinearGradient).attrs({
  colors: ['#DE0046', '#F7A34B'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 70px;
  height: 70px;
  border-radius: 60px;
  margin-right: 10px;

  background-color: white;

  /* border-width: 2px;
  border-color: red; */

  flex: 1;
  justify-content: center;
  align-items: center;
`
export const AvatarBackground = styled.View`
  width: 93%;
  height: 93%;
  border-radius: 60px;

  background-color: #fff;


  display: flex;
  align-items: center;
  justify-content: center;

`

export const Avatar = styled.Image`
  width: 58px;
  height: 58px;
  border-radius: 60px;

  /* margin-right: 10px; */

  background-color: white;
`