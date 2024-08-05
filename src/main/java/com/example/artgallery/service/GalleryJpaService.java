package com.example.artgallery.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.artgallery.model.Artist;
import com.example.artgallery.model.Gallery;
import com.example.artgallery.repository.ArtistJpaRepository;
import com.example.artgallery.repository.GalleryJpaRepository;
import com.example.artgallery.repository.GalleryRepository;

@Service
public class GalleryJpaService implements GalleryRepository {

    @Autowired
    private GalleryJpaRepository galleryJpaRepository;

    @Autowired
    private ArtistJpaRepository artistJpaRepository;

    @Override
    public ArrayList<Gallery> getGalleries() {

        List<Gallery> galleries = galleryJpaRepository.findAll();
        return new ArrayList<>(galleries);
    }

    @Override
    public Gallery getGalleryById(int galleryId) {
        try {
            Gallery gallery = galleryJpaRepository.findById(galleryId).get();
            return gallery;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Gallery addGallery(Gallery gallery) {
        try {
            List<Integer> artistIds = new ArrayList<>();

            for (Artist artist : gallery.getArtists()) {
                artistIds.add(artist.getArtistId());
            }

            List<Artist> artists = artistJpaRepository.findAllById(artistIds);
            gallery.setArtists(artists);

            for (Artist artist : artists) {
                artist.getGalleries().add(gallery);
            }

            galleryJpaRepository.save(gallery);

            artistJpaRepository.saveAll(artists);
            return gallery;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

    }

    @Override
    public Gallery updateGallery(Gallery gallery, int galleryId) {
        try {
            Gallery existingGallery = galleryJpaRepository.findById(galleryId).get();

            if (gallery.getGalleryName() != null)
                existingGallery.setGalleryName(gallery.getGalleryName());
            if (gallery.getLocation() != null)
                existingGallery.setLocation(gallery.getLocation());
            if (gallery.getArtists() != null) {
                List<Artist> artists = existingGallery.getArtists();

                for (Artist artist : artists) {
                    artist.getGalleries().remove(existingGallery);
                }

                artistJpaRepository.saveAll(artists);

                List<Integer> artistIds = new ArrayList<>();

                for (Artist artist : gallery.getArtists()) {
                    artistIds.add(artist.getArtistId());
                }

                List<Artist> newArtists = artistJpaRepository.findAllById(artistIds);

                for (Artist artist : newArtists) {
                    artist.getGalleries().add(existingGallery);
                }

                artistJpaRepository.saveAll(newArtists);

                existingGallery.setArtists(newArtists);
            }

            galleryJpaRepository.save(existingGallery);
            return existingGallery;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public void deleteGallery(int galleryId) {
        try {

            Gallery gallery = galleryJpaRepository.findById(galleryId).get();

            List<Artist> artists = gallery.getArtists();

            for (Artist artist : artists) {
                artist.getGalleries().remove(gallery);
            }

            artistJpaRepository.saveAll(artists);

            galleryJpaRepository.deleteById(galleryId);

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }

    @Override
    public List<Artist> getGalleryArtists(int galleryId) {
        try {
            Gallery gallery = galleryJpaRepository.findById(galleryId).get();
            return gallery.getArtists();

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}
