package com.example.spotifyclone.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "albums")
public class Albums {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "albumid")
    private int albumId;

    @Column(name = "albumname")
    private String albumName;

    @Column(name = "description")
    private String description;

    @Column(name = "albumartist")
    private String albumArtist;

    @Column(name = "releasedate")
    private String releaseDate;

    @Column(name = "totalsongs")
    private int totalSongs;

    @Column(name = "totalduration")
    private String totalDurartion;

    @Column(name = "albumimageurl")
    private String albumImageUrl;

    @Column(name = "albumbheaderbgcolor")
    private String albumbHeaderBgColor;

    @Column(name = "albumbbgcolor")
    private String albumbBgColor;


    @OneToMany(mappedBy="album")
    @JsonIgnoreProperties("album")
    private List<Songs> songs;


    public Albums(int albumId, String albumName, String description, String albumArtist, String releaseDate,int totalSongs, String totalDuration) {
        this.albumId = albumId;
        this.albumName = albumName;
        this.description = description;
        this.albumArtist = albumArtist;
        this.releaseDate = releaseDate;
        this.totalDurartion = totalDuration;
    }

    public Albums() {

    }

    public int getAlbumId() {
        return albumId;
    }

    public void setAlbumId(int albumId) {
        this.albumId = albumId;
    }

    public String getAlbumName() {
        return albumName;
    }

    public void setAlbumName(String albumName) {
        this.albumName = albumName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAlbumArtist() {
        return albumArtist;
    }

    public void setAlbumArtist(String albumArtist) {
        this.albumArtist = albumArtist;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public int getTotalSongs() {
        return totalSongs;
    }

    public void setTotalSongs(int totalSongs) {
        this.totalSongs = totalSongs;
    }

    public String getTotalDurartion() {
        return totalDurartion;
    }

    public void setTotalDurartion(String totalDurartion) {
        this.totalDurartion = totalDurartion;
    }

    

    public List<Songs> getSongs() {
        return songs;
    }

    public void setSongs(List<Songs> songs) {
        this.songs = songs;
    }

    public String getAlbumImageUrl() {
        return albumImageUrl;
    }

    public void setAlbumImageUrl(String albumImageUrl) {
        this.albumImageUrl = albumImageUrl;
    }

    public String getAlbumbHeaderBgColor() {
        return albumbHeaderBgColor;
    }

    public void setAlbumbHeaderBgColor(String albumbHeaderBgColor) {
        this.albumbHeaderBgColor = albumbHeaderBgColor;
    }

    public String getAlbumbBgColor() {
        return albumbBgColor;
    }

    public void setAlbumbBgColor(String albumbBgColor) {
        this.albumbBgColor = albumbBgColor;
    }
    
}
