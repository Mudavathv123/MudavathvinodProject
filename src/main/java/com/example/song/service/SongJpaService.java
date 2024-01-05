/*
 * You can use the following import statements
 * import org.springframework.beans.factory.annotation.Autowired;
 * import org.springframework.http.HttpStatus;
 * import org.springframework.stereotype.Service;
 * import org.springframework.web.server.ResponseStatusException;
 * import java.util.*;
 */

// Write your code here

package com.example.song.service;

import com.example.song.model.Song;
import com.example.song.repository.SongJpaRepository;
import com.example.song.repository.SongRepository;
import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class SongJpaService implements SongRepository {

	@Autowired
	private SongJpaRepository songJpaRepository;

	@Override
	public ArrayList<Song> getSongs() {
		List<Song> listOfSongs = songJpaRepository.findAll();
		return new ArrayList<Song>(listOfSongs);
	}

}