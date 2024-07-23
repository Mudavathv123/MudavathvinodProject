package com.example.spotifyclone.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "songs")
public class Songs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "songid")
    private int songId;

    @Column(name = "songname")
    private String songName;

    @Column(name = "songartist")
    private String songArtist;

    @Column(name = "singer")
    private String singer;

    @Column(name = "songcoresh")
    private String songCoresh;

    @Column(name = "songduration")
    private String songDuration;

    @ManyToOne
    @JoinColumn(name = "albumid")
    @JsonIgnoreProperties("songs")
    private Albums album;

    public Songs(int songId, String songName, String songArtist, String singer, String songCoresh) {
        this.songId = songId;
        this.songName = songName;
        this.songArtist = songArtist;
        this.singer = singer;
        this.songCoresh = songCoresh;
    }

    public Songs() {

    }

    public int getSongId() {
        return songId;
    }

    public void setSongId(int songId) {
        this.songId = songId;
    }

    public String getSongName() {
        return songName;
    }

    public void setSongName(String songName) {
        this.songName = songName;
    }

    public String getSongArtist() {
        return songArtist;
    }

    public void setSongArtist(String songArtist) {
        this.songArtist = songArtist;
    }

    public String getSinger() {
        return singer;
    }

    public void setSinger(String singer) {
        this.singer = singer;
    }

    public String getSongCoresh() {
        return songCoresh;
    }

    public void setSongCoresh(String songCoresh) {
        this.songCoresh = songCoresh;
    }

    public String getSongDuration() {
        return songDuration;
    }

    public void setSongDuration(String songDuration) {
        this.songDuration = songDuration;
    }

    public Albums getAlbum() {
        return album;
    }

    public void setAlbum(Albums album) {
        this.album = album;
    }

}
