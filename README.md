import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class ForwardFilter implements Filter {

private String targetUrl;

@Override
public void init(FilterConfig filterConfig) throws ServletException {
targetUrl = filterConfig.getInitParameter("targetUrl");
}

@Override
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
HttpServletRequest req = (HttpServletRequest) request;
HttpServletResponse res = (HttpServletResponse) response;

// Open a connection to the target URL
URL url = new URL(targetUrl + req.getRequestURI());
HttpURLConnection connection = (HttpURLConnection) url.openConnection();
connection.setRequestMethod(req.getMethod());

// Copy headers from the original request to the target request
for (String headerName : req.getHeaderNames()) {
connection.setRequestProperty(headerName, req.getHeader(headerName));
}

// Copy the request body from the original request to the target request
connection.setDoOutput(true);
ServletOutputStream outputStream = res.getOutputStream();
IOUtils.copy(req.getInputStream(), outputStream);
outputStream.flush();
outputStream.close();

// Forward the target response back to the original client
res.setStatus(connection.getResponseCode());
for (String headerName : connection.getHeaderFields().keySet()) {
if (headerName != null) {
for (String headerValue : connection.getHeaderFields().get(headerName)) {
res.addHeader(headerName, headerValue);
}
}
}
try (BufferedInputStream inputStream = new BufferedInputStream(connection.getInputStream())) {
IOUtils.copy(inputStream, res.getOutputStream());
}
}

@Override
public void destroy() {
// cleanup code goes here
}
}