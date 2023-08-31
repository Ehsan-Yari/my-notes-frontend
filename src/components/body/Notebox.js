import NoteItem from './NoteItem';
import Searchbar from './Searchbar';
import { useFetchNote } from '../../contexts/FetchNoteContext';
import React from 'react';

export default function Notebox() {

  // add skelton loading bar when loading notes....(todo)

  // getting values using context hook for notes
  const { notes } = useFetchNote();

  return (
    <> 
      <Searchbar />
      {notes.length === 0 
      ? <NoteItem key={"Internal Server Error"} title={"Info"} desc={"You haven't take a note yet, Take your First note"} tag={null} datetime={null} /> 
      : notes?.map((element) => {
          return <NoteItem key={element._id} title={element.title} desc={element.description} tag={element.tag} datetime={element.timestamp} _id={element._id} /> 
      })}
    </>
  )
}
