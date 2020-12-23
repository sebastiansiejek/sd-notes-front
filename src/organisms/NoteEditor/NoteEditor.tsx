import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import React, { useState, useEffect } from 'react'
import SDNotesRequests from 'api/SDNotesRequests'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import { Form, Input, Button, notification } from 'antd'
import { INote } from 'types/types'

export default () => {
  const [detail, setDetail] = useState(EditorState.createEmpty())
  const [title, setTitle] = useState('')
  const [data, setData] = useState({} as INote)

  useEffect(() => {
    setData({
      title: title,
      detail: JSON.stringify(convertToRaw(detail.getCurrentContent()))
    })
  }, [detail, title])

  return (
    <Form
      onFinish={() => {
        const { title, detail } = data
        if (title && detail) {
          SDNotesRequests.addNote({ title, detail }).then(() => {
            notification['success']({
              message: 'Note has been added'
            })
          })
          setTitle('')
        }
      }}
    >
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Title is required' }]}
      >
        <Input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          defaultValue={title}
        />
      </Form.Item>
      <Form.Item>
        <Editor
          onEditorStateChange={setDetail}
          editorStyle={{
            minHeight: '40vh',
            border: '1px solid #d9d9d9',
            padding: '0 15px'
          }}
          toolbar={{
            options: [
              'inline',
              'blockType',
              'fontSize',
              'list',
              'textAlign',
              'colorPicker',
              'link',
              'embedded',
              'emoji',
              'remove',
              'history'
            ]
          }}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Dodaj
      </Button>
    </Form>
  )
}
