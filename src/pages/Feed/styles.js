import styled from 'styled-components/native'

export const HeaderNavigation = styled.View`
  display: flex;
  flex-direction: row;
`

export const BtnIcons = styled.TouchableOpacity`
  flex: 1;

  align-items: center;
  justify-content: center;

  margin-right: 25px;
`

export const Icon = styled.Image`
  width: 26px;
  height: 26px;
`

export const Container = styled.View`
  background-color: #fff;
`

export const Post = styled.View`
  margin-top: 10px;

  border: none;
`

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`

export const MoreContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`

export const InteractionsOptions = styled.View`
  flex: 1;

  flex-direction: row;

  padding-left: 15px;
`

export const Interactions = styled.Image`
  margin-top: 10px;
  margin-right: 10px;
`

export const BookmarkContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;

  padding-right: 15px;
`

export const Bookmark = styled.Image`
  margin-top: 10px;
`

export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999'
})`
  margin: 30px 0
`