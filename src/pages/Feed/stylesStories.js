import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const ContainerStories = styled.View`
  height: 100px;
  background-color: white;

  flex: 1;

  justify-content: center;

  flex-direction: row;

  padding: 15px;

  border-bottom-width: 0.4px;

  border-bottom-color: #BDBDBD;
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

  flex: 1;
  justify-content: center;
  align-items: center;
`

export const AvatarBorderNoStories = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 60px;

  top: 14px;
  margin-right: 10px;

  background-color: white;

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

export const AvatarStories = styled.Image`
  width: 58px;
  height: 58px;
  border-radius: 60px;

  background-color: white;
`

export const PlusIcon = styled.Image`
  bottom: 20px;
  left: 20px;

  width: 25px;
  height: 25px;
`