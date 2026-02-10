import { Button } from "@/components/ui/Button";

export function MidCTA() {
  return (
    <section className="bg-primary-900 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-xl font-bold text-white sm:text-2xl">
              Sound like your business?
            </p>
            <p className="mt-2 text-primary-200">
              Let&apos;s figure out whether it&apos;s the tank or the food that needs fixing first.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/contact" variant="white" size="lg">
              Let&apos;s Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
