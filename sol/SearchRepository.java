package com.counsellink.techeval.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.counsellink.techeval.domain.Album;

public interface SearchRepository extends JpaRepository<Album, Long>{
	@Query("SELECT alb FROM Album alb "
		+ "LEFT OUTER JOIN alb.artist art "
		+ "LEFT OUTER JOIN alb.songs song "
		+ "WHERE art.artistName LIKE '%'||:keyword||'%' OR "
		+ "alb.albumName LIKE '%'||:keyword||'%' OR "
		+ "song.songName LIKE '%'||:keyword||'%' GROUP BY alb.albumName")
	public List<Album> doSearch(@Param("keyword")String keyword);
}
