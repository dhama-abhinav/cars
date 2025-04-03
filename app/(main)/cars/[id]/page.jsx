export default async function CarDetailsPage({ params }) {
  // Fetch car details
  const { id } = await params;
  // const result = await getCarById(id);

  // If car not found, show 404
  //   if (!result.success) {
  //     notFound();
  //   }

  return <div className="container mx-auto px-4 py-12">Cars -{id}</div>;
}
