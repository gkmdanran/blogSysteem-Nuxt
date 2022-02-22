<template>
  <div class="player" v-if="flag">
    <client-only>
      <aplayer
        listMaxHeight="100px"
        ref="player"
        repeat="list"
        :list="list"
        @error="error"
        :music="music"
        showLrc
        :listFolded="true"
        :mini="ismini"
        @update:music="getCurrent"
      >
      </aplayer>
    </client-only>
    <div
      class="close"
      @click="close"
      :class="[
        ismini ? 'closeactive' : '',
        ismini && !isFirst ? 'anclass' : '',
      ]"
    >
      {{ ismini ? "&gt;" : "&lt;" }}
    </div>
  </div>
</template>

<script>
import { request, getMusic } from "~/plugins/axios";
export default {
  data() {
    return {
      list: [],
      music: {},
      flag: false,
      current: {},
      ismini: true,
      isFirst: true,
    };
  },
  methods: {
    close() {
      this.ismini = !this.ismini;
      this.isFirst = false;
    },
    getCurrent(music) {
      this.current = music;
    },
    async error() {
      this.getCurrent;
      try {
        const song = await getMusic(
          `https://api.imjad.cn/cloudmusic/?type=song&id=${this.current.cloudID}&br=128000`
        );
        if (song && song.data.code == 200) {
          this.current.src = song.data.data[0].url;
          this.music = this.current;
          this.$refs.player.onSelectSong();
        }
      } catch (error) {}
    },
  },
  async created() {
    const res = await request({ url: `/songs` });
    if (res && res.code == 200) {
      this.list = res.data;
      var music = res.data[0];
      try {
        const song = await getMusic(
          `https://api.imjad.cn/cloudmusic/?type=song&id=${music.cloudID}&br=128000`
        );
        if (song && song.data.code == 200) {
          music.src = song.data.data[0].url;
        }
        this.music = music;
        this.current = music;
        this.flag = true;
      } catch (error) {}
    }
  },
};
</script>

<style scoped>
@keyframes myfirst {
  from {
    width: 20px;
    height: 90px;
  }
  to {
    width: 15px;
    height: 66px;
  }
}
@-moz-keyframes myfirst {
  from {
    width: 20px;
    height: 90px;
  }
  to {
    width: 15px;
    height: 66px;
  }
}
@-webkit-keyframes myfirst {
  from {
    width: 20px;
    height: 90px;
  }
  to {
    width: 15px;
    height: 66px;
  }
}
@-o-keyframes myfirst {
  from {
    width: 20px;
    height: 90px;
  }
  to {
    width: 15px;
    height: 66px;
  }
}
.player {
  width: 370px;
  display: flex;
  overflow: hidden;
  border-radius: 5px;
}

.aplayer {
  margin: 0 !important;
  border-radius: 0 !important;
  width: 350px;
}
.close {
  width: 20px;
  height: 100%;
  background: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: #929292;
  height: 90px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 14px;
}
.closeactive {
  width: 15px;
  height: 66px;
}
.anclass {
  animation: myfirst 0.4s ease;
  -moz-animation: myfirst 0.4s ease;
  -webkit-animation: myfirst 0.4s ease;
  -o-animation: myfirst 0.4s ease;
}
@media screen and (max-width: 900px) {
  .player {
    display: none !important;
  }
}
</style>

