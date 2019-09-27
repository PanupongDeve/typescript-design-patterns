interface MediaPlayer {
    play(audioType: string, fileName: string);
}

interface AdvancedMediaPlayer {
    playVlc(fileName: string): void;
    playMp4(fileName: string): void;
}

class VlcPlayer implements AdvancedMediaPlayer {
    public playVlc(fileName: string): void {
        console.log(`Playing vlc file. Name: ${fileName}`)
    }

    public playMp4(fileName: string): void {

    }
}

class Mp4Player implements AdvancedMediaPlayer {
    public playVlc(fileName: string): void {
        
    }

    public playMp4(fileName: string): void {
        console.log(`Playing mp4 file. Name: ${fileName}`)
    }
}


class MediaAdapter implements MediaPlayer {
    
    advancedMediaPlayer: AdvancedMediaPlayer;

    constructor(audioType: string) {
        if (audioType === "vlc") {
            this.advancedMediaPlayer = new VlcPlayer();
        } else if (audioType === "mp4") {
            this.advancedMediaPlayer = new Mp4Player();
        }
    }

    public play(audioType: string, fileName: string): void {
        if(audioType === "vlc") {
            this.advancedMediaPlayer.playVlc(fileName);
        } else if (audioType === "mp4") {
            this.advancedMediaPlayer.playMp4(fileName);
        }
    }

}


class AudioPlayer implements MediaPlayer {
    mediaAdapter: MediaAdapter;

    public play(audioType: string, fileName: string): void {
        if (audioType === "mp3") {
            console.log(`Playing mp3 file. Name: ${fileName}`)
        } else if (audioType === "vlc" || audioType === "mp4") {
            this.mediaAdapter = new MediaAdapter(audioType);
            this.mediaAdapter.play(audioType, fileName);
        } else {
            console.log(`Invalid media. ${audioType} format not supported`);
        }
    }
}


const audioPlayer = new AudioPlayer();

audioPlayer.play("mp3", "Jusus is God.mp3");
audioPlayer.play("mp4", "Shap of you.mp4");
audioPlayer.play("vlc", "Tranformer.vlc");
audioPlayer.play("avi", "Star War.avi");