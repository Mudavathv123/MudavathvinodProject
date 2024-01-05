// Write your code here

package com.example.song.repository;

import com.example.song.model.Song;
import java.util.ArrayList;

public interface SongRepository {

    ArrayList<Song> getSongs();
}