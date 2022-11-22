
export const DataFetch = async () => {
    const response = await fetch('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
      return await response.json();
}