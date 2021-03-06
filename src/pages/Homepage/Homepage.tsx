import AddNoteButton from 'atoms/AddNoteButton'
import MainTemplate from 'templates/MainTemplate'
import NoteEditor from 'organisms/NoteEditor'
import Notes from 'containers/Notes'
import React from 'react'
import { Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setVisibleAddNoteModal } from 'store/note'
import { IStore } from 'store'

export default () => {
  const dispatch = useDispatch()
  const { note } = useSelector((state: IStore) => state)

  return (
    <MainTemplate>
      <>
        <Modal
          visible={note.isVisibleModal}
          title="Note"
          footer={[]}
          width="80%"
          onCancel={() => dispatch(setVisibleAddNoteModal(false))}
        >
          <NoteEditor />
        </Modal>
        <AddNoteButton onClick={() => dispatch(setVisibleAddNoteModal(true))} />
        <Notes />
      </>
    </MainTemplate>
  )
}
