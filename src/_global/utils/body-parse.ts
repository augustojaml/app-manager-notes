type ParsedValue = string | number | readonly string[] | undefined

export const bodyParser = (value: string): ParsedValue => {
  try {
    const parsedValue = JSON.parse(value)
    if (
      typeof parsedValue === 'string' ||
      typeof parsedValue === 'number' ||
      (Array.isArray(parsedValue) &&
        parsedValue.every((item) => typeof item === 'string'))
    ) {
      return parsedValue as ParsedValue
    }
    return value
  } catch (error) {
    return value
  }
}
