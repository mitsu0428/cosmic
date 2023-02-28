import React from "react";
import styled from "styled-components";

const artists = [
  { name: "Artist 1", bio: "Airtist", imageUrl: "/images/cosmic-artist.png" },
  { name: "Artist 2", bio: "Airtist", imageUrl: "/images/cosmic-artist.png" },
  { name: "Artist 3", bio: "Airtist", imageUrl: "/images/cosmic-artist.png" },
  { name: "Artist 4", bio: "Airtist", imageUrl: "/images/cosmic-artist.png" },
  { name: "Artist 5", bio: "Airtist", imageUrl: "/images/cosmic-artist.png" },
  { name: "Artist 6", bio: "Airtist", imageUrl: "/images/cosmic-artist.png" },
  { name: "Artist 7", bio: "Airtist", imageUrl: "/images/cosmic-artist.png" },
  { name: "Artist 8", bio: "Airtist", imageUrl: "/images/cosmic-artist.png" },
  { name: "Artist 9", bio: "Airtist", imageUrl: "/images/cosmic-artist.png" },
  { name: "Artist 10", bio: "Airtist", imageUrl: "/images/cosmic-artist.png" },
];

const Artist = () => (
  <ArtistContainer>
    {artists.map((artist) => (
      <ArtistCard key={artist.name}>
        <ArtistImage src={artist.imageUrl} alt={artist.name} />
        <ArtistName>{artist.name}</ArtistName>
        <ArtistBio>{artist.bio}</ArtistBio>
      </ArtistCard>
    ))}
  </ArtistContainer>
);

export default Artist;

const ArtistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 64px;
`;

const ArtistCard = styled.div`
  width: 200px;
  border-radius: 50%;
  margin: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ArtistImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const ArtistName = styled.h2`
  margin-top: 10px;
  font-size: 1.5rem;
  text-align: center;
`;

const ArtistBio = styled.p`
  margin-top: 5px;
  font-size: 1rem;
  text-align: center;
`;
