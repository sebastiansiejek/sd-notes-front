import React, { useEffect, useState } from 'react'
import SDNotesRequests from 'api/SDNotesRequests'
import { Card, Col, Row, Spin } from 'antd'
import { IStore } from 'store'
import { convertFromRaw } from 'draft-js'
import { excerpt } from 'utils/utils'
import { setNotes } from 'store/note'
import { useDispatch, useSelector } from 'react-redux'

export default () => {
  const [isNotes, setHasNotes] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    SDNotesRequests.getAll().then(({ data }) => {
      if (!data.data.length) setHasNotes(false)
      dispatch(setNotes(data.data))
    })
  }, [])

  const { note } = useSelector((state: IStore) => state)
  const { notes } = note

  return (
    <>
      {!isNotes && <h2>You don't have any notes</h2>}
      {!!notes.length && (
        <Row gutter={16}>
          {notes.map((note) => (
            <Col span={8} key={note.id} style={{ marginTop: 16 }}>
              <Card title={note.name}>
                <p>
                  {excerpt(
                    convertFromRaw(JSON.parse(note.detail)).getPlainText(),
                    50
                  )}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {!notes.length && isNotes && <Spin />}
    </>
  )
}
