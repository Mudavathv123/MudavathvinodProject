// Write your code here

package com.example.song.repository;

import java.util.ArrayList;
import com.example.song.model.Song;

public interface SongRepository {

    ArrayList<Song> getSongs();
}