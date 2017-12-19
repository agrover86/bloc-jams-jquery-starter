class Helper{
  playPauseAndUpdate(song){
    player.playPause(song);
    let duration = player.getDuration();
    $('#time-control .total-time').text(player.prettyTime(duration));
  }
}
let helper = new Helper();
