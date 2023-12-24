export function capitalize(word: string) {
  return word[0].toUpperCase() + word.substring(1);
}

export function titleCase(title: string) {
  return title.split(' ').map(capitalize).join(' ');
}

export function getFilenameOnly(path: string) {
  return path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
}