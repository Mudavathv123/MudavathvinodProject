package com.example.artgallery.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.artgallery.model.Art;
import com.example.artgallery.model.Artist;
import com.example.artgallery.model.Gallery;
import com.example.artgallery.repository.ArtistJpaRepository;
import com.example.artgallery.repository.ArtJpaRepository;
import com.example.artgallery.repository.ArtistRepository;
import com.example.artgallery.repository.GalleryJpaRepository;

@Service
public class ArtistJpaService implements ArtistRepository {

    @Autowired
    private ArtistJpaRepository artistJpaRepository;

    @Autowired
    private GalleryJpaRepository galleryJpaRepository;

    @Autowired
    private ArtJpaRepository artJpaRepository;

    @Override
    public ArrayList<Artist> getArtists() {
        List<Artist> artists = artistJpaRepository.findAll();
        return new ArrayList<>(artists);
    }

    @Override
    public Artist getArtistById(int artistId) {
        try {
            Artist artist = artistJpaRepository.findById(artistId).get();
            return artist;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Artist addArtist(Artist artist) {
        List<Integer> galleryIds = new ArrayList<>();

        for (Gallery gallery : artist.getGalleries()) {
            galleryIds.add(gallery.getGalleryId());
        }

        List<Gallery> galleries = galleryJpaRepository.findAllById(galleryIds);

        if (galleryIds.size() != galleries.size())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "some galleries are not fund!");
        artist.setGalleries(galleries);
        artistJpaRepository.save(artist);
        return artist;

    }

    @Override
    public Artist updateArtist(Artist artist, int artistId) {

        Artist existingArtist = getArtistById(artistId);
        if (artist.getArtistName() != null)
            existingArtist.setArtistName(artist.getArtistName());
        if (artist.getGenre() != null)
            existingArtist.setGenre(artist.getGenre());
        if (artist.getGalleries() != null) {
            List<Integer> galleryIds = new ArrayList<>();

            for (Gallery gallery : artist.getGalleries()) {
                galleryIds.add(gallery.getGalleryId());
            }

            List<Gallery> galleries = galleryJpaRepository.findAllById(galleryIds);

            if (galleryIds.size() != galleries.size()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Some galleries are not found!");
            }
            existingArtist.setGalleries(galleries);
        }
        artistJpaRepository.save(existingArtist);
        return existingArtist;
    }

    @Override
    public void deleteArtist(int artistId) {
        try {
            artistJpaRepository.deleteById(artistId);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }

    @Override
    public List<Gallery> getArtistGalleries(int artistId) {
        try {
            Artist artist = artistJpaRepository.findById(artistId).get();
            return artist.getGalleries();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

    }

    @Override
    public List<Art> getArtArtists(int artistId) {
        Artist artist = getArtistById(artistId);
       return artJpaRepository.findByArtist(artist);
    }

}
