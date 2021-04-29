


export const retrieveTweets = (data) => {
  if(!data) return []

  return data.map((item) => {
    let media = ''
    let hashtags = []
    if (item.entities.media) if(item.entities.media[0].type === 'photo') media = item.entities.media[0].media_url_https
    if (item.entities.hashtags) if(item.entities.hashtags) hashtags = item.entities.hashtags.map(item => hashtags.push(item.text))
    if (item.entities.hashtags) if(item.entities.hashtags) hashtags = item.entities.hashtags.map(tag => tag.text)
    
    return({
      created_at: item.created_at,
      tweet_url: item.entities.urls.length === 0? '' : item.entities.urls[0].expanded_url,
      media: media,
      hashtags: hashtags,
      retweet_count: item.retweet_count,
      text: item.text,
      username: item.user.screen_name,
      profile_image: item.user.profile_image_url_https,
      profile_link_color: item.user.profile_link_color,
      profile_background_color: item.user.profile_background_color,
      user_descriptions: item.user.description,
      users_name: item.user.name,
      verified: item.user.verified
    })
  })
}

export const getMins = mins => {
  let output = mins.toString()
  if (output.length === 1) output = '0' + output 
  return output
}

export const getTime = (time) => {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let date = new Date(time)
  date.setFullYear(new Date().getFullYear())
  let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  let dt = new Date(utc)
  return `${dt.getUTCHours()}:${getMins(dt.getMinutes())} | ${months[dt.getMonth()]} ${dt.getUTCDate()} ${dt.getFullYear()}`
}
