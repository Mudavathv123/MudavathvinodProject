package com.example.spotifyclone.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="radiosongs")
public class RadioSongs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "radiosongid")
    private int radioSongId;

    @Column(name = "songname")
    private String songName;

    @Column(name = "singers")
    private String singers;

    @Column(name = "songimage")
    private String songImage;

    @Column(name = "albumname")
    private String albumName;

    @Column(name = "songduration")
    private String songDuration;

    public int getRadioSongId() {
        return radioSongId;
    }

    public void setRadioSongId(int radioSongId) {
        this.radioSongId = radioSongId;
    }

    public String getSongName() {
        return songName;
    }

    public void setSongName(String songName) {
        this.songName = songName;
    }

    public String getSingers() {
        return singers;
    }

    public void setSingers(String singers) {
        this.singers = singers;
    }

    public String getSongImage() {
        return songImage;
    }

    public void setSongImage(String songImage) {
        this.songImage = songImage;
    }

    public String getAlbumName() {
        return albumName;
    }

    public void setAlbumName(String albumName) {
        this.albumName = albumName;
    }

    public String getSongDuration() {
        return songDuration;
    }

    public void setSongDuration(String songDuration) {
        this.songDuration = songDuration;
    }

    
    
}
