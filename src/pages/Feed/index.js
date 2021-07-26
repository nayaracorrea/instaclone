import React, { useState, useEffect, useCallback } from 'react';
import { useLayoutEffect } from 'react';
import { Button, FlatList, View, Text, Image, StyleSheet } from 'react-native';

import LazyImage from '../../components/LazyImage';
import StoriesArea from '../../components/StoriesArea';
import {
  HeaderNavigation,
  BtnIcons,
  Icon,
  Container,
  Post,
  Header,
  Avatar,
  Name,
  MoreContainer,
  InteractionsOptions,
  Interactions,
  BookmarkContainer,
  Bookmark,
  Description,
  Loading
} from './styles';

import {
  ContainerStories,
  AvatarBorder,
  AvatarBackground,
  AvatarStories,
  AvatarBorderNoStories,
  PlusIcon
} from './stylesStories'

const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#000",
      }}
    />
  );
}

const Feed = ({ navigation }) => {
  const [feed, setFeed] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [viewable, setViewable] = useState([])

  const [stories, setStories] = useState([])

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return

    setLoading(true)

    const response = await fetch(
      `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`
    )

    const data = await response.json()
    const totalItems = response.headers.get('X-Total-Count')

    setTotal(Math.floor(totalItems / 5))
    setFeed(shouldRefresh ? data : [...feed, ...data])
    setPage(pageNumber + 1)
    setLoading(false)
  }

  async function loadStories() {
    setLoading(true)

    const response = await fetch(
      'http://localhost:3000/authors'
    )

    const data = await response.json()

    setStories(data)

  }


  console.log(stories)


  useEffect(() => {
    loadPage()
    loadStories()
  }, [])


  async function refreshList() {
    setRefresh(true)

    await loadPage(1, true)
    await loadStories()

    setRefresh(false)
  }

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id))
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderNavigation>
          <BtnIcons>
            <Icon source={require('../../assets/plus-sign.png')} />
          </BtnIcons>
          <BtnIcons>
            <Icon source={require('../../assets/heart.png')} />
          </BtnIcons>
          <BtnIcons>
            <Icon source={require('../../assets/messenger.png')} />
          </BtnIcons>
        </HeaderNavigation>
      )
    })
  })

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const ListHeaderStories = (stories = false) => {
    return (
      <>
        {stories == false ? (
          <AvatarBorderNoStories>
            <AvatarBackground>
              <AvatarStories source={require('../../assets/LargeAvatar.png')} />
              <PlusIcon source={require('../../assets/AddStory.png')} />
            </AvatarBackground>
          </AvatarBorderNoStories>
        ) :
          (
            <AvatarBorder>
              <AvatarBackground>
                <AvatarStories source={require('../../assets/LargeAvatar.png')} />
              </AvatarBackground>
            </AvatarBorder>
          )
        }
      </>
    )
  }

  const ListHeaderFeed = () => {
    //View to set in Header
    return (
      <ContainerStories>
        <FlatList
          data={stories}
          horizontal={true}
          ListHeaderComponent={ListHeaderStories(false)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AvatarBorder>
              <AvatarBackground>
                <AvatarStories source={{ uri: item.avatar }} />
              </AvatarBackground>
            </AvatarBorder>
          )}
        />

      </ContainerStories>
    );
  };

  return (
    <Container>
      <FlatList
        style={{ backgroundColor: '#fff' }}
        data={feed}
        keyExtractor={post => String(post.id)}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refresh}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 10 }}
        ListFooterComponent={loading && <Loading />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorView}
        ListHeaderComponent={ListHeaderFeed}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <Avatar source={{ uri: item.author.avatar }} />
              <Name>{item.author.name}</Name>

              <MoreContainer>
                <Image source={require('../../assets/more.png')} />
              </MoreContainer>
            </Header>

            <LazyImage
              shouldLoad={viewable.includes(item.id)}
              aspectRatio={item.aspectRatio}
              smallSource={{ uri: item.small }}
              source={{ uri: item.image }}
            />

            <InteractionsOptions>
              <Interactions source={require('../../assets/like.png')} />
              <Interactions source={require('../../assets/comment.png')} />
              <Interactions source={require('../../assets/share.png')} />

              <BookmarkContainer>
                <Bookmark source={require('../../assets/bookmark.png')} />
              </BookmarkContainer>
            </InteractionsOptions>

            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
          </Post>

        )}
      />

    </Container>
  );
}


export default Feed;