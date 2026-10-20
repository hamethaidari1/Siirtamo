CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 40),
  service text NOT NULL CHECK (char_length(service) <= 120),
  property_type text CHECK (property_type IS NULL OR char_length(property_type) <= 80),
  location text NOT NULL CHECK (char_length(location) BETWEEN 1 AND 120),
  preferred_date text CHECK (preferred_date IS NULL OR char_length(preferred_date) <= 40),
  frequency text CHECK (frequency IS NULL OR char_length(frequency) <= 80),
  details text CHECK (details IS NULL OR char_length(details) <= 2000),
  privacy_accepted boolean NOT NULL CHECK (privacy_accepted = true)
);
GRANT INSERT ON public.quote_requests TO anon, authenticated;
GRANT ALL ON public.quote_requests TO service_role;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a quote request" ON public.quote_requests FOR INSERT TO anon, authenticated WITH CHECK (privacy_accepted = true);