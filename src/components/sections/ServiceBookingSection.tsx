import SectionLabel from "@/components/ui/SectionLabel";

export default function ServiceBookingSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionLabel>Book a Call</SectionLabel>
          <h2 className="text-display-md font-bold text-ink mt-4">
            Schedule Your Free Consultation
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Cal inline embed code begins */}
          <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-30min" />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                Cal("init", "30min", {origin:"https://app.cal.com"});
                Cal.ns["30min"]("inline", {
                  elementOrSelector:"#my-cal-inline-30min",
                  config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"},
                  calLink: "intellia-studio/30min",
                });
                Cal.ns["30min"]("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
              `,
            }}
          />
          {/* Cal inline embed code ends */}
        </div>
      </div>
    </section>
  );
}
