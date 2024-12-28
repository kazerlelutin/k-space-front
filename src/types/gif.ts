type Image = {
  url: string
  width: string
  height: string
}

export type GIF = {
  id: string
  title: string
  embed_url: string
  images: {
    downsized_small: {
      mp4: string
      width: string
      height: string
    }
  }
}
