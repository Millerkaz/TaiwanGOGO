import VideoCard from '../../views/Main/components/videoCard/videoCard';

export const renderCard = VideosArray => {
  return VideosArray.map(v => {
    const {
      channel: { name, photo: photoUrl, yt_channel_id: ytChannelId },
      live_start: liveStart,
      live_end: liveEnd,
      live_viewers: liveViewers,
      title,
      yt_video_key: ytVideoKey,
    } = v;

    return (
      <VideoCard
        key={ytVideoKey}
        data={{
          name,
          photoUrl,
          ytChannelId,
          liveStart,
          liveEnd,
          liveViewers,
          title,
          ytVideoKey,
        }}
      />
    );
  });
};
