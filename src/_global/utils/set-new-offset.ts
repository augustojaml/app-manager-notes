export const setNewOffset = ({ x, y }: { x: number; y: number }) => {
  return {
    x: Math.max(x, 128),
    y: Math.max(y, 0),
  }
}
