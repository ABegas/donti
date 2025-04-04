import ContentWithBg from '@/app/components/Global/ContentWithBg';
import HeroBanner from '@components/Global/HeroBanner';
import { TreatmentsListContent } from '@data/treatments'; // adjust path if needed

export async function generateStaticParams() {
    return TreatmentsListContent.map((t) => ({
      subcategory: t.slug,
    }));
  }

export default async function SubcategoryTreatment({ params }) {
    const { subcategory } = await params
  
    const treatment = TreatmentsListContent.find((t) => t.slug === subcategory);
  
    if (!treatment) {
      return <div>Treatment not found</div>; // or use `notFound()` from 'next/navigation'
    }
  
    return (
        <div>
            <HeroBanner
                imgSrc={treatment.imgSrc}
                height='h-[25vh]'
                title={treatment.title}
                subtitle={treatment.subtitle}
                imgWidth={1200}
                imgHeight={557}
                overlay={true}
            />
            <ContentWithBg text={treatment.text} />
        </div>
    );
  }
