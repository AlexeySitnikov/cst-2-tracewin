import { useState } from 'react'

export const useModalWindow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [content, setContent] = useState(null)

  const closeModalClickHandler = () => {
    setIsModalOpen(false)
  }

  const openModalClickHandler = (id) => {
    if (id.status === 'error') {
      setIsModalOpen(true)
      setContent(<div id={id} />)
    } else if (id.status === 'done') {
      setContent(<div id={id} />)
    }
  }

  return {
    isModalOpen, setIsModalOpen, content, setContent, closeModalClickHandler, openModalClickHandler,
  }
}
