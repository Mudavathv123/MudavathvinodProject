package com.example.spotifyclone.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "radio")
public class Radio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "radioid")
    private int radioId;

    @Column(name = "radioimage")
    private String radioImage;

    @Column(name = "artistname")
    private String artistName;

    @Column(name = "moreartists")
    private String moreArtistName;

    @Column(name = "saves")
    private String songsSaves;

    @Column(name = "radioheaderbgcolor")
    private String radioHeaderBgColor;

    @Column(name = "radiobgcolor")
    private String radioBgColor;

    @OneToMany
    @JoinColumn (name = "radioid")
    private List<RadioSongs> radioSongs = new ArrayList<>();


    public int getRadioId() {
        return radioId;
    }
    public void setRadioId(int radioId) {
        this.radioId = radioId;
    }
    public String getRadioImage() {
        return radioImage;
    }
    public void setRadioImage(String radioImage) {
        this.radioImage = radioImage;
    }
    public String getArtistName() {
        return artistName;
    }
    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }
    public String getMoreArtistName() {
        return moreArtistName;
    }
    public void setMoreArtistName(String moreArtistName) {
        this.moreArtistName = moreArtistName;
    }
    public String getSongsSaves() {
        return songsSaves;
    }
    public void setSongsSaves(String songsSaves) {
        this.songsSaves = songsSaves;
    }
    public String getRadioHeaderBgColor() {
        return radioHeaderBgColor;
    }
    public void setRadioHeaderBgColor(String radioHeaderBgColor) {
        this.radioHeaderBgColor = radioHeaderBgColor;
    }
    public String getRadioBgColor() {
        return radioBgColor;
    }
    public void setRadioBgColor(String radioBgColor) {
        this.radioBgColor = radioBgColor;
    }
    public List<RadioSongs> getRadioSongs() {
        return radioSongs;
    }
    public void setRadioSongs(List<RadioSongs> radioSongs) {
        this.radioSongs = radioSongs;
    }

    
    
}
