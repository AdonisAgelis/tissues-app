type PhotoId = {
  photoId: string;
};

export default function PhotoDetails({ params }: { params: PhotoId }) {
  return <div>{params.photoId}</div>;
}
