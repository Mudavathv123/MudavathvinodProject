package com.example.spotifyclone.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "artists")
public class PopularArtistHome {

    @Id
    @GeneratedValue( strategy=GenerationType.IDENTITY)
    @Column(name = "artistid")
    private int artistId;

    @Column(name = "artistname")
    private String artistName;

    @Column(name = "artistimageurl")
    private String artistImageUrl;

    public PopularArtistHome(int artistId, String artistName, String artistImageUrl) {
        this.artistId = artistId;
        this.artistName = artistName;
        this.artistImageUrl = artistImageUrl;
    }

    public PopularArtistHome() {

    }

    public int getArtistId() {
        return artistId;
    }

    public void setArtistId(int artistId) {
        this.artistId = artistId;
    }

    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    public String getArtistImageUrl() {
        return artistImageUrl;
    }

    public void setArtistImageUrl(String artistImageUrl) {
        this.artistImageUrl = artistImageUrl;
    }

    
}
