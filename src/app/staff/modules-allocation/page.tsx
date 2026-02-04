import MainLayout from "@/layouts/MainLayout";
import { AlertTriangle } from "lucide-react";

export default function ModulesAllocationPage() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[calc(100vh-16rem)]">
        <div className="text-center max-w-md px-6">
          <div className="flex justify-center mb-6">
            <div className="bg-amber-100 p-4 rounded-full">
              <AlertTriangle className="w-16 h-16 text-amber-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Page Under Construction
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            This page is updating soon
          </p>
          <p className="text-sm text-gray-500">
            We&apos;re working hard to bring you this feature. Please check back later.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
