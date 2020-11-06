import React from 'react'

const styles = {
  container: {
    marginBottom: 20,
  },
  div: {
    width: '100%',
    border: 0,
    height: 500,
    borderRadius: 4,
    overflow: 'hidden',
  },
}

export default function SVGEmbed({ svg, height }) {
  const frameStyles = height ? { ...styles.frame, height } : styles.frame

  return (
    <div style={styles.container}>
      <div style={frameStyles} dangerouslySetInnerHTML={{ __html: svg }}></div>
    </div>
  )
}
