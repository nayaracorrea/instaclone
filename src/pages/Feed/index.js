import React, { useState, useEffect, useCallback } from 'react';
import { useLayoutEffect } from 'react';
import { Button, FlatList, View, Text, Image } from 'react-native';

import LazyImage from '../../components/LazyImage';
import StoriesArea from '../../components/StoriesArea';
import { HeaderNavigation, BtnIcons, Icon, Container, Post, Header, Avatar, Name, MoreContainer, Description, Loading } from './styles';

const Feed = ({ navigation }) => {
  const [feed, setFeed] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [viewable, setViewable] = useState([])

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

  useEffect(() => {
    loadPage()
  }, [])

  console.log(feed)

  async function refreshList() {
    setRefresh(true)

    await loadPage(1, true)

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
        // onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 10 }}
        ListFooterComponent={loading && <Loading />}
        ListHeaderComponent={refresh && loading ? <StoriesArea /> : <StoriesArea />}
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