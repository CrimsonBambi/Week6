<<<<<<< HEAD
import { useState } from "react";
import MediaRow from "../components/MediaRow";
import SingleView from "../components/SingleView";

const mediaArray = [
  {
    media_id: 8,
    user_id: 5,
    filename: 'https://place-hold.it/1200x800.jpg&text=Pic1&fontsize=120',
    thumbnail: 'http://place-hold.it/320/240.jpg&text=Thumb2&fontsize=20',
    filesize: 170469,
    media_type: 'image/jpeg',
    title: 'Picture 1',
    description: 'This is a placeholder picture.',
    created_at: '2024-01-07T20:49:34.000Z',
  },
  {
    media_id: 9,
    user_id: 7,
    filename: 'https://place-hold.it/800x600.jpg&text=Pic2&fontsize=72',
    thumbnail: 'http://place-hold.it/320/240.jpg&text=Thumb3&fontsize=20',
    filesize: 1002912,
    media_type: 'image/jpeg',
    title: 'Pic 2',
    description: '',
    created_at: '2024-01-07T21:32:27.000Z',
  },
  {
    media_id: 17,
    user_id: 2,
    filename:
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4',
    thumbnail: 'http://place-hold.it/320/240.jpg&text=Thumb1&fontsize=20',
    filesize: 1236616,
    media_type: 'video/mp4',
    title: 'Bunny',
    description: 'Butterflies fly around the bunny.',
    created_at: '2024-01-07T20:48:13.000Z',
  },
];

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  console.log('selectedItem', selectedItem);
=======
import {useEffect, useState} from 'react';

import MediaRow from '../components/MediaRow'; //../components/MediaRow
import SingleView from '../components/SingleView';
import {fetchData} from '../utils/fetchData';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  console.log('selectedItem', selectedItem);

  const getMedia = async () => {
    try {
      const mediaData = await fetchData(
        import.meta.env.VITE_MEDIA_API + '/media',
      );

      const authApiUrl = import.meta.env.VITE_AUTH_API;
      const newData = await Promise.all(
        mediaData.map(async (item) => {
          const data = await fetchData(`${authApiUrl}/users/${item.user_id}`);

          return {...item, username: data.username};
        }),
      );
      console.log('newData', newData);

      setMediaArray(newData);
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  console.log('mediaArray', mediaArray);

>>>>>>> hooks
  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
<<<<<<< HEAD
=======
            <th>Owner</th>
>>>>>>> hooks
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
<<<<<<< HEAD
            <MediaRow key={item.media_id} item={item}
            setSelectedItem={setSelectedItem} />
=======
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
>>>>>>> hooks
          ))}
        </tbody>
      </table>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
};
<<<<<<< HEAD

=======
>>>>>>> hooks
export default Home;
