import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { Form, Input } from 'antd'

type IProps = {
  onChange: any
}

export default ({ onChange }: IProps) => {
  const [content, setContent] = useState(EditorState.createEmpty())
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (content) {
      onChange({
        content: JSON.stringify(convertToRaw(content.getCurrentContent())),
        title
      })
    }
  }, [content])

  useEffect(() => {
    if (title) {
      onChange({
        content,
        title
      })
    }
  }, [title])

  return (
    <Form>
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Title is required' }]}
      >
        <Input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
        />
      </Form.Item>
      <Form.Item>
        <Editor
          onEditorStateChange={setContent}
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
    </Form>
  )
}
