import DemoBanner from "@/components/review/DemoBanner";
import EngageReviews from "@/components/review/EngageReview";
import FeedbackSection from "@/components/review/Feedback";
import ReputationSection from "@/components/review/HeroSection";
import ReducedNegativeImpact from "@/components/review/ReducedNegativeImpact";
import ReviewFeatures from "@/components/review/ReviewFeatures";

export default function ReviewManagement() {
  return (
    <>
        <ReputationSection />
        <ReviewFeatures />
        <EngageReviews />
        <FeedbackSection />
        <ReducedNegativeImpact />
        <DemoBanner />
    </>
  );
}